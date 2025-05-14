from pydantic import BaseModel
from datetime import datetime, date

class ResponseModel(BaseModel):
    date: datetime

class member(BaseModel):
    memberType: str
    name: str
    email: str
    phone: str
    query: str
    message: str

class mentor(BaseModel):
    mentorType: str
    name: str
    email: str
    phone: str
    message: str
