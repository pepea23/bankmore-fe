## Show Rate [POST]
 > /feature/show-rate-homepage

| parameters

- none of patameter

#### request
 > /feature/show-rate-homepage
 
  body
```json
{
"data" : [
    {
      "id": 111,
      "expected_interest": 0.5,
      "expected_borrow_time": "30 day",
      "deed_id": 12301,
      "deed_first_name": "Suwit",
      "deed_last_name": "Mongkong",
      "deed_address_no": "174/54",
      "deed_address_village": "Thungkru",
      "deed_address_city": "Thonburi",
      "deed_address_province": "Bankok",
      "deed_address_postal_code":  21741,
      "size": "500 meter * 500 meter",
      "size_unit":"50 unit",
      "latitude":"35.689487",
      "longitude":"139.691706",
      "business_status": "open",
      "enable_rent": "ture",
      "reporter_type": "Online advertising",
      "Property_invest_histories": { 
          "id": "111",
          "signing_date": "2012-04-23T18:25:43.511Z",
          "invest_date": "2012-04-23T18:25:43.511Z",
          "end_siging_date": "2012-04-23T18:25:43.511Z"
        },
      "property_types":{
          "id": 111,
          "name":"Suwit" 
        },
      "property_seen / property_favorites":{
          "id": 111 
        },
      "property_biding":{
          "id": 111,
          "biding_start_time": "2012-04-23T18:25:43.511Z",
          "biding_end_time": "2012-04-23T18:25:43.511Z",
          "current_winner": "2012-04-23T18:25:43.511Z"
        },
      "property_images":{
          "id": 111,
          "image_path": "C:\\User\\user\\image\\building1.jpg",
          "type": "jpg"
        } 
    }
  ]
}

```
#### response
 > /feature/show-rate-homepage
  ```json
 //success status 200
  {
    "status": 201,
    "rateperyear": "ดอกเบี้ยสินเชื่อเริ่มต้นต่อปี",
    "mlr": "rate MLR",
    "mrr": "rate MRR",
    "error": []
  }

//error status 4xx
  {
    "status": 400,
    "error": [
      {
        "message": "Error Something"
      }
    ]
}
```
