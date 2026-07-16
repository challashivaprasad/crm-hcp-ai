from sqlalchemy.orm import Session

from app.models.hcp import HCP
from app.schemas.hcp import HCPCreate


def create_hcp(db: Session, hcp: HCPCreate):
    new_hcp = HCP(
        name=hcp.name,
        hospital=hcp.hospital,
        specialization=hcp.specialization,
        city=hcp.city
    )

    db.add(new_hcp)
    db.commit()
    db.refresh(new_hcp)
    return new_hcp


def get_all_hcps(db: Session):
    return db.query(HCP).all()


def get_hcp_by_id(db: Session, hcp_id: int):
    return db.query(HCP).filter(HCP.id == hcp_id).first()


def update_hcp(db: Session, hcp_id: int, hcp: HCPCreate):
    existing = db.query(HCP).filter(HCP.id == hcp_id).first()

    if existing is None:
        return None

    existing.name = hcp.name
    existing.hospital = hcp.hospital
    existing.specialization = hcp.specialization
    existing.city = hcp.city

    db.commit()
    db.refresh(existing)

    return existing


def delete_hcp(db: Session, hcp_id: int):
    hcp = db.query(HCP).filter(HCP.id == hcp_id).first()

    if hcp is None:
        return None

    db.delete(hcp)
    db.commit()

    return {"message": "HCP deleted successfully"}