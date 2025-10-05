from flask import render_template, request, redirect, url_for, flash
from app import db
from app.models import Client

def init_routes(app):
    @app.route('/')
    def index():
        return render_template('dashboard.html')
    
    @app.route('/clients')
    def clients():
        clients_list = Client.query.all()
        return render_template('clients.html', clients=clients_list)
    
    @app.route('/clients/new', methods=['GET', 'POST'])
    def new_client():
        if request.method == 'POST':
            # Récupérer les données du formulaire
            name = request.form['name']
            industry = request.form['industry']
            contact_email = request.form['contact_email']
            phone = request.form['phone']
            country = request.form['country']
            city = request.form['city']
            
            # Créer le client
            client = Client(
                name=name,
                industry=industry,
                contact_email=contact_email,
                phone=phone,
                country=country,
                city=city
            )
            
            db.session.add(client)
            db.session.commit()
            flash('Client créé avec succès!', 'success')
            return redirect(url_for('clients'))
        
        return render_template('new_client.html')