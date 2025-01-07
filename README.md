# 인벤토리 관리 백엔드

## 개요
이 프로젝트는 재고 관리를 위한 백엔드 시스템으로, Python과 Django 프레임워크를 사용하여 개발되었습니다. 제품 관리, 재고 추적, 주문 처리, 보고서 생성을 위한 API를 제공합니다.

---

## 주요 기능
- **제품 관리**: 제품 생성, 조회, 수정, 삭제 기능 제공
- **재고 추적**: 제품의 실시간 재고 현황 추적
- **주문 처리**: 고객 주문 생성 및 관리
- **보고서 생성**: 판매 및 재고에 대한 다양한 보고서 생성

---

## 사용 기술
- **프로그래밍 언어**: Python
- **웹 프레임워크**: Django
- **데이터베이스**: SQLite (MySQL 또는 PostgreSQL로 변경 가능)
- **API 문서화**: Swagger (`drf-yasg`) 또는 Django REST Framework 자동 문서화 도구

---

## 설치 및 실행 방법

### 1. 저장소 클론
```bash
git clone https://github.com/knockinthecave/inventory-manage-backend.git
cd inventory-manage-backend
```

### 2. 가상 환경 생성 및 활성화
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate    # Windows
```

### 3. 의존성 설치
```bash
pip install -r requirements.txt
```

### 4. 데이터베이스 마이그레이션 적용
```bash
python manage.py migrate
```

### 5. 개발 서버 실행
```bash
python manage.py runserver
```
다음 주소에서 서버를 확인할 수 있습니다: [http://localhost:8000](http://localhost:8000)

---

## URL 명세서

### 1. 생산 현황
- **URL**: `/production/`
- **Method**: `GET`
- **View**: `CurrentAssembleStockList`
- **설명**: 현재 조립된 제품의 재고 현황 조회
- **Name**: `production-status`

### 2. 재고 현황
- **URL**: `/stock/`
- **Method**: `GET`
- **View**: `CurrentPartStockList`
- **설명**: 현재 보유 중인 부품 재고 조회
- **Name**: `stock-status`

### 3. 설비 상태
- **URL**: `/facility/`
- **Method**: `GET`
- **View**: `InjectionScheduleList`
- **설명**: 설비(주입기)의 현재 상태 및 스케줄 조회
- **Name**: `injector-status`

### 4. 주입 데이터
- **URL**: `/shot-data/`
- **Method**: `GET`
- **View**: `ShotDataList`
- **설명**: 주입기에서 생성된 데이터 조회
- **Name**: `shot-data`

---

## 기여 방법
1. 저장소를 포크합니다.
2. 새 브랜치를 생성합니다:
   ```bash
   git checkout -b feature/기능명
   ```
3. 변경사항을 커밋합니다:
   ```bash
   git commit -m "메시지 입력"
   ```
4. 브랜치를 푸시합니다:
   ```bash
   git push origin feature/기능명
   ```
5. 풀 리퀘스트를 생성합니다.

---

## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

---

