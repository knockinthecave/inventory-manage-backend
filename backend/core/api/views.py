from django.utils import timezone
from django.db.models import Sum, Case, When, Value, CharField, Max
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import (
    CurrentAssembleStock,
    CurrentPartStock,
    InjectionSchedule,
    ShotData,
)
from .serializers import (
    CurrentAssembleStockSerializer,
    CurrentPartStockSerializer,
    InjectionScheduleSerializer,
    ShotDataSerializer,
)


class CurrentAssembleStockList(APIView):
    def get(self, request):
        products = (
            CurrentAssembleStock.objects
            .filter(is_packaged='N')
            .values('erp_code', 'product_name')
            .annotate(total_stock=Sum('stock'))
        )

        serializer = CurrentAssembleStockSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CurrentPartStockList(APIView):
    def get(self, request):
        stocks = (
            CurrentPartStock.objects
            .filter(stock__gt=0)
            .values('material_code', 'material_name')
            .annotate(total_stock=Sum('stock'))
        )

        serializer = CurrentPartStockSerializer(stocks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class InjectionScheduleList(APIView):
    def get(self, request):
        today = timezone.now().date()

        facility = (
            InjectionSchedule.objects
            .filter(work_date=today)
            .values('injector')
            .annotate(
                is_injected=Max(
                    Case(
                         When(is_injected='N', then=Value('N')),
                         default=Value('Y'),
                         output_field=CharField()
                    ))
            )
        )

        serializer = InjectionScheduleSerializer(facility, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ShotDataList(APIView):
    def get(self, request):
        subquery = (
            ShotData.objects.using('woojin_db')
            .values('Machine_Name')
            .annotate(latest_timestamp=Max('TimeStamp'))
            .order_by()
        )

        shots = ShotData.objects.using('woojin_db').filter(
            TimeStamp__in=subquery.values('latest_timestamp')
        )

        serializer = ShotDataSerializer(shots, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
