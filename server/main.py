from flask import Flask, send_file, send_from_directory, request, g
from secure_random import base64
app = Flask(__name__, static_folder='../ui/www', static_url_path='')

# deferred callbacks
def after_this_request(f):
	if not hasattr(g, 'after_request_callbacks'):
		g.after_request_callbacks = []
	g.after_request_callbacks.append(f)
	return f

@app.after_request
def call_after_request_callbacks(response):
	for callback in getattr(g, 'after_request_callbacks', ()):
		callback(response)
	return response

# user auth
@app.before_request
def verify_user():
	user = request.cookies.get('user')
	if not user:
		user = base64(32)
		@after_this_request
		def store_user(response):
			response.set_cookie('user', user)
	g.user = user

# serve app
@app.route("/")
def index():
	print("index")
	return send_file('../ui/www/index.html')

@app.route("/<path:path>")
def send_ui(path):
	print(path)
	return send_from_directory('../ui/www', path)

@app.route("/api/pitches", methods=['GET'])
def pitches():
	print("pitches")
	return g.user

if __name__ == '__main__':
	app.run(host='0.0.0.0', debug=True)
