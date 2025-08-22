from django.urls import path
from myapp import views
urlpatterns = [
    path("homepage",views.Home,name="home-page"),
    path("product/",views.Product,name="product-page"),
    path("contact/",views.Contact,name="contact-page"),
    path("about/",views.About,name="about-page"),
    path("signup/",views.Reg,name="signup-page"),
    path("profile/",views.Profile,name="profile-page"),
    path("",views.Login,name="login-page"),
    # Products Url
    path("products/",views.GetProducts,name="product-page"),
    #curd
    path("curd/",views.ShowProducts,name="curd-page"),
    path("addproduct/",views.AddProduct,name="addproduct-page"),
    path("productdelete/<int:id>/",views.Delete_Product,name="delete-product"),
    path("productupdate/<int:id>/",views.Update_Product,name="update-product"),
    path("djangoform",views.signup,name="signup"),
]
