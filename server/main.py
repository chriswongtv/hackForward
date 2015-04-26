from flask import Flask, send_from_directory, send_file
app = Flask(__name__, static_folder='../ui/www', static_url_path='')

# serve app
@app.route("/")
def index():
	return send_file('../ui/www/index.html')

@app.route("/<path:path>")
def send_ui(path):
	return send_from_directory('../ui/www', path)

if __name__ == '__main__':
	app.run(host='0.0.0.0', debug=True)
