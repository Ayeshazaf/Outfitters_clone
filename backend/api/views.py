from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_product(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(product)
    return Response(serializer.data)

@api_view(['POST'])
def create_product(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


# # from django.shortcuts import render

# # Create your views here.

# from django.shortcuts import render, get_object_or_404, redirect
# from .models import Product

# def add_product(request):
#     if request.method == "POST":
#         Product.objects.create(
#             name=request.POST['name'],
#             description=request.POST['description'],
#             price=request.POST['price'],
#             image=request.FILES['image']
#         )
#         return redirect('home')
#     return render(request, 'add_product.html')

# def product_list(request):
#     products = Product.objects.all()
#     return render(request, 'product_list.html', {'products': products})

# def product_detail(request, id):
#     product = get_object_or_404(Product, id=id)
#     return render(request, 'product_detail.html', {'product': product})

# def update_product(request, id):
#     product = get_object_or_404(Product, id=id)

#     if request.method == "POST":
#         product.name = request.POST['name']
#         product.description = request.POST['description']
#         product.price = request.POST['price']

#         if request.FILES.get('image'):
#             product.image = request.FILES['image']

#         product.save()
#         return redirect('home')

#     return render(request, 'update_product.html', {'product': product})

# def delete_product(request, id):
#     product = get_object_or_404(Product, id=id)
#     product.delete()
#     return redirect('home')