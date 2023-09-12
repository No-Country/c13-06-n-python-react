from flask import jsonify

def response(data, message=None):
    return jsonify({
        'success':True,
        'data':data,
        'message': message
    }), 200

def not_found():
    return jsonify({
        'success':False,
        'data':{},
        'message': 'Resource not found',
        "code": 404
    }), 404

def bad_request(error):
    return  jsonify({
        'success':False,
        'data':{},
        'message': error,
        "code": 400
    }), 400