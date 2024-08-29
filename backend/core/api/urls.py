from django.urls import path
from .views import (
                    CurrentAssembleStockList,
                    CurrentPartStockList,
                    InjectionScheduleList,
                    ShotDataList,
)

urlpatterns = [
    path('production/',
         CurrentAssembleStockList.as_view(),
         name='production-status'),
    path('stock/', CurrentPartStockList.as_view(), name='stock-status'),
    path('facility/', InjectionScheduleList.as_view(), name='injector-status'),
    path('shot-data/', ShotDataList.as_view(), name='shot-data'),
]
