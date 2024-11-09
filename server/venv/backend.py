from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins = '*')
@app.route("/api/users", methods = ['POST'])
def get_user_info():
    if request.method == 'POST':

        data = request.get_json()
        phone_number = data.get('phoneNumber')  # 'phoneNumber' in React
        total_cows = data.get('number')  # 'number' in React
        youtube_url = data.get('url')  # 'url' in React
        
        return jsonify({
            "message": "User created successfully",
            "phone_number": phone_number,
            "total_cows": total_cows,
            "youtube_url": youtube_url
        })

@app.route("/api/users", methods=['GET'])
def test():
    return jsonify({"message": "This is the test endpoint!"})

if __name__ == "__main__":
    app.run(debug = True, port = 8080)