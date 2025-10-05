from app import db, login_manager
from flask_login import UserMixin
from datetime import datetime

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    role = db.Column(db.String(20), default='viewer')  # admin, manager, viewer
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f'<User {self.username}>'

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    industry = db.Column(db.String(50))
    contact_email = db.Column(db.String(120))
    phone = db.Column(db.String(20))
    country = db.Column(db.String(50))
    city = db.Column(db.String(50))
    status = db.Column(db.String(20), default='prospect')  # prospect, actif, archive
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f'<Client {self.name}>'

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String(50))  # site vitrine, e-commerce, etc.
    status = db.Column(db.String(20), default='planifié')  # planifié, en_cours, en_pause, livré
    start_date = db.Column(db.Date)
    due_date = db.Column(db.Date)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)
    client = db.relationship('Client', backref=db.backref('projects', lazy=True))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f'<Project {self.name}>'

class Milestone(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    due_date = db.Column(db.Date)
    status = db.Column(db.String(20), default='pending')  # pending, completed, delayed
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    project = db.relationship('Project', backref=db.backref('milestones', lazy=True))
    
    def __repr__(self):
        return f'<Milestone {self.title}>'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))