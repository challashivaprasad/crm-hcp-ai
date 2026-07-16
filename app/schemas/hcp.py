from pydantic import BaseModel


class HCPCreate(BaseModel):
    name: str
    hospital: str
    specialization: str
    city: str


class HCPResponse(HCPCreate):
    id: int

    class Config:
        from_attributes = True