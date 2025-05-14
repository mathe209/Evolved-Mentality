from datetime import datetime, date
from sqlalchemy import TIMESTAMP, Boolean, Column, DateTime, ForeignKey, Integer, String, text
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Mentorship(Base):
    __tablename__ = "mentorship"
    id: Mapped[int] = mapped_column(primary_key=True)
    mentorType: Mapped[str] = mapped_column(nullable=False)
    name: Mapped[str] = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(nullable=False)
    phone: Mapped[str] = mapped_column(nullable=False)
    message: Mapped[str] = mapped_column(nullable=False)
    created_at: Mapped[datetime] = mapped_column(nullable=False,default=datetime.now()) 

class Member(Base):
    __tablename__ = "member"
    id: Mapped[int] = mapped_column(primary_key=True)
    memberType: Mapped[str] = mapped_column(nullable=False)
    name: Mapped[str] = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(nullable=False)
    phone: Mapped[str] = mapped_column(nullable=False)
    query: Mapped[str] = mapped_column(nullable=False)
    message: Mapped[str] = mapped_column(nullable=False)
    created_at: Mapped[datetime] = mapped_column(nullable=False,default=datetime.now()) 
