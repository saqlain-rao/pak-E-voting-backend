import ssl
import socket

hostname = 'ac-vngm77b-shard-00-00.jv7ili2.mongodb.net'
ip = '159.41.246.187'
port = 27017

context = ssl.create_default_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE

try:
    with socket.create_connection((ip, port)) as sock:
        with context.wrap_socket(sock, server_hostname=hostname) as ssock:
            print(f"Connected to {ip} with SNI {hostname}")
            print(ssock.version())
except Exception as e:
    print(e)
