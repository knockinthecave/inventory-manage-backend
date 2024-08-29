from django.db import models


class AssembleOrder(models.Model):
    aid = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=30)
    product_number = models.CharField(max_length=30)
    erp_code = models.CharField(max_length=30)
    product_count = models.IntegerField()
    working_num = models.CharField(max_length=30)
    status = models.CharField(max_length=20)
    worker = models.CharField(max_length=100)
    orderdate = models.DateTimeField(db_column='orderDate')
    defectcount = models.IntegerField(db_column='defectCount')
    stock = models.IntegerField()
    completedate = models.DateField(db_column='completeDate')
    using_part = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'assemble_order'


class CurrentAssembleStock(models.Model):
    idx = models.AutoField(primary_key=True)
    division = models.CharField(max_length=20)
    product_name = models.CharField(max_length=30)
    product_number = models.CharField(max_length=30)
    erp_code = models.CharField(max_length=30)
    quantity = models.CharField(max_length=30)
    lot_no = models.CharField(max_length=30)
    workingnum = models.CharField(db_column='workingNum', max_length=30)
    assemblecount = models.IntegerField(db_column='assembleCount')
    defectcount = models.IntegerField(db_column='defectCount')
    stock = models.IntegerField()
    status = models.CharField(max_length=20)
    assembleworker = models.CharField(db_column='assembleWorker',
                                      max_length=100)
    assembledate = models.DateField(db_column='assembleDate')
    storage = models.CharField(max_length=30)
    leak_inspected = models.CharField(max_length=100, blank=True, null=True)
    vision_inspected = models.CharField(max_length=100, blank=True, null=True)
    exterior_inspected = models.CharField(max_length=100,
                                          blank=True,
                                          null=True)
    leak_inspection_number = models.CharField(max_length=100,
                                              blank=True,
                                              null=True)
    vision_inspection_number = models.CharField(max_length=100,
                                                blank=True,
                                                null=True)
    exterior_inspection_number = models.CharField(max_length=100,
                                                  blank=True,
                                                  null=True)
    is_packaged = models.CharField(max_length=100, blank=True, null=True)
    packaging_number = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'current_assemble_stock'


class CurrentPartStock(models.Model):
    idx = models.AutoField(primary_key=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    quantity = models.CharField(max_length=100, blank=True, null=True)
    lot_no = models.CharField(max_length=100, blank=True, null=True)
    stock = models.CharField(max_length=100, blank=True, null=True)
    part_input_date = models.DateField(blank=True, null=True)
    material_name = models.CharField(max_length=100, blank=True, null=True)
    color = models.CharField(max_length=100, blank=True, null=True)
    grade = models.CharField(max_length=100, blank=True, null=True)
    storage = models.CharField(max_length=100, blank=True, null=True)
    material_code = models.CharField(max_length=100, blank=True, null=True)
    data_upload_datetime = models.DateTimeField(blank=True, null=True)
    injection_number = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'current_part_stock'


class InjectionSchedule(models.Model):
    idx = models.AutoField(primary_key=True)
    injector = models.CharField(max_length=100, blank=True, null=True)
    day_or_night = models.CharField(max_length=100, blank=True, null=True)
    division = models.CharField(max_length=100, blank=True, null=True)
    product_name = models.CharField(max_length=100, blank=True, null=True)
    product_number = models.CharField(max_length=100, blank=True, null=True)
    erp_code = models.CharField(max_length=100, blank=True, null=True)
    work_date = models.DateField(blank=True, null=True)
    scheduling_datetime = models.DateTimeField(blank=True, null=True)
    order_count = models.IntegerField(blank=True, null=True)
    injection_count = models.IntegerField(blank=True, null=True)
    defect_count = models.IntegerField(blank=True, null=True)
    mold_num = models.CharField(max_length=100, blank=True, null=True)
    is_ordered = models.CharField(max_length=100, blank=True, null=True)
    mold_erp_code = models.CharField(max_length=100, blank=True, null=True)
    working_number = models.CharField(max_length=100, blank=True, null=True)
    worker_name = models.CharField(max_length=100, blank=True, null=True)
    material_name = models.CharField(max_length=100, blank=True, null=True)
    material_code = models.CharField(max_length=100, blank=True, null=True)
    is_injected = models.CharField(max_length=100, blank=True, null=True)
    production_box_count = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'injection_schedule'


class ShotData(models.Model):
    idx = models.AutoField(primary_key=True)
    Machine_Name = models.CharField(max_length=100, blank=True, null=True)
    Shot_Number = models.IntegerField(blank=True, null=True)
    TimeStamp = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'shot_data'
