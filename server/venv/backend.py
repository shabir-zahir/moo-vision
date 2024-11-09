from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins = '*')
@app.route("/api/users", methods = ['POST'])
def get_user_info():
    if request.method == 'POST':

        data = request.get_json()
        phone_number = data.get('phone_number')
        total_cows = data.get('cow_count')
        youtube_url = data.get('youtube_url')
        return jsonify({
            "message": "User created successfully",
            "phone_number": phone_number,
            "total_cows": total_cows,
            "youtube_url": youtube_url
        })


def test():
    return 'test'

if __name__ == "__main__":
    app.run(debug = True, port = 8080)