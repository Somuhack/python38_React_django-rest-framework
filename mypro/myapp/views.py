from django.shortcuts import render,HttpResponse,redirect
from .models import person,Products
from .forms import SignUpForm
from .models import user

# Create your views here.
def Home(request):
    return render(request,"home.html")
def Product(request):
    return render(request,"Products.html")
def Contact(request):
    return render(request,"Contact.html")
def About(request):
    return render(request,"About.html")
def Reg(request):
    if request.method=='POST':
        name=request.POST.get('name')
        email=request.POST.get('email')
        password=request.POST.get('pass')

        if person.objects.filter(email=email).exists():
            return render(request,'Registration.html',{'error':"User Already Exist" })
        else:
            Person =person.objects.create(name=name,email=email,password=password)
            Person.save()
            return redirect("login-page")
    return render(request,"Registration.html")
def Login(request):
    if request.method=='POST':
        email=request.POST.get('email')
        password=request.POST.get('pass')
        print("it's Comming")
        print(email,password)
        if person.objects.filter(email=email).exists():
             Person = person.objects.get(email=email)
             if Person.password==password:
                 return redirect("home-page")
             else:
                 return render(request,'Login.html',{'error':"Invalid Credencial"})
        else:
            return render(request,'Login.html',{'error':"Invalid Credencial"})
    return render(request,"Login.html")

def Profile(request):
    allPerson=person.objects.all()
    return render(request,"Profile.html",{"persons":allPerson})

# Products
def GetProducts(request):
    products=Products.objects.all()
    return render(request,"Products.html",{'products':products})
# curd
def ShowProducts(request):
    products=Products.objects.all()
    return render(request,"curd.html",{'products':products})
def AddProduct(request):
    if request.method=='POST':
      product_name= request.POST.get("pname")
      product_price=request.POST.get("pprice")
      product_description=request.POST.get("pdes")
      product_image=request.FILES.get("pimg")
      addProductData =Products.objects.create(product_name=product_name,product_price=product_price,product_description=product_description,product_image=product_image)
      addProductData.save()
      return redirect("curd-page")
    
    return render(request,"ProductsAdd.html")
def Delete_Product(request,id):
    
    product = Products.objects.get(id=id)
    product.delete()
    return redirect("curd-page")
def Update_Product(request,id):
    product=Products.objects.get(id=id)
    if request.method=='POST':
      product_name= request.POST.get("pname")
      product_price=request.POST.get("pprice")
      product_description=request.POST.get("pdes")
      product_image=request.FILES.get("pimg")
      
    #   now we update new data
      product.product_name=product_name
      product.product_price=product_price
      product.product_description=product_description
      if product_image:
        product.product_image=product_image
      
    #   addProductData =Products.objects.create(product_name=product_name,product_price=product_price,product_description=product_description,product_image=product_image)
    
      product.save()
      return redirect("curd-page")
    else:
      return render(request,"Update.html",{"product":product})
  
#   django form
def signup(request):
     if request.method == "POST":
         form = SignUpForm(request.POST)
         if form.is_valid():
             form.save()
             return redirect('home')
     else:
        form=SignUpForm()
         
     return render(request, "signup.html", {"form": form})
    
        
    