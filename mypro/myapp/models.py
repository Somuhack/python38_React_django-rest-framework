from django.db import models

# Create your models here.
class person(models.Model):
    name=models.CharField(max_length=20)
    email=models.EmailField(unique=True,null=False)
    password=models.CharField(max_length=20)
    profile_image=models.ImageField(upload_to='profiles/',default='SOME STRING')
    
    def __str__(self):
        return self.name
class Products(models.Model):
    product_name = models.CharField(max_length=100)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    product_description = models.TextField()
    product_image = models.ImageField(upload_to='products/')
    
    def __str__(self):
        return self.product_name
# class Order(models.Model):
#     customer = models.ForeignKey(person, on_delete=models.CASCADE,on_update=models.CASCADE)
#     product = models.ForeignKey(Products, on_delete=models.CASCADE,on_update=models.CASCADE)
#     order_date = models.DateTimeField(auto_now_add=True)
#     order_status = models.CharField(max_length=20, default='pending')
class user(models.Model):
    name=models.CharField(max_length=20)
    password=models.CharField(max_length=20)