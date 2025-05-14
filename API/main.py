from fastapi import Depends, FastAPI, HTTPException, Response
from sqlalchemy import select
from sqlalchemy.orm import Session

import models as models, schemas as schemas
import database
from database import SessionLocal, engine
from typing import Optional, List
import psycopg2
from psycopg2.extras import RealDictCursor
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
# Allow requests from your frontend (localhost:5500)
origins = [
    "http://localhost:5173",  # Vite default dev port
    "http://127.0.0.1:5173"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Dependency creation
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/addMember")
def createMember(member:schemas.member, db:Session=Depends(get_db)):
    new_member = models.Member(**member.dict())
    db.add(new_member)
    db.commit()
    db.refresh(new_member)
    return new_member

@app.post("/addMentor")
def createMentor(mentor:schemas.mentor, db:Session=Depends(get_db)):
    new_mentor = models.Mentorship(**mentor.dict())
    db.add(new_mentor)
    db.commit()
    db.refresh(new_mentor)
    return new_mentor