from flask.ext.sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db(app):
	db.init_app(app)

class Pitch(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	creator = db.Column(db.String(32))

	title = db.Column(db.String(255))
	summary = db.Column(db.String(255))
	
	def __init__(self, user, title, summary):
		self.title = title
		self.summary = summary
		self.creator = user
