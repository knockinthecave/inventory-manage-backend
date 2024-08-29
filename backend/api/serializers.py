from rest_framework import serializers
from .models import (
     CurrentAssembleStock,
     CurrentPartStock,
     InjectionSchedule,
     ShotData
)


class CurrentAssembleStockSerializer(serializers.ModelSerializer):
    total_stock = serializers.IntegerField()

    class Meta:
        model = CurrentAssembleStock
        fields = ['erp_code', 'product_name', 'total_stock']


class CurrentPartStockSerializer(serializers.ModelSerializer):
    total_stock = serializers.IntegerField()

    class Meta:
        model = CurrentPartStock
        fields = ['material_code', 'material_name', 'total_stock']


class InjectionScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = InjectionSchedule
        fields = ['injector', 'is_injected']


class ShotDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShotData
        fields = ['Machine_Name', 'Shot_Number', 'TimeStamp']
