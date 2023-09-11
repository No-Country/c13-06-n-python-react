from flask import jsonify

def response(data, message=None):
    return jsonify({
        'success':True,
        'data':data,
        'message': message
    }), 200