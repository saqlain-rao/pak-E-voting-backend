import ssl
import socket

pairs = [
    ('159.41.246.187', 'ac-vngm77b-shard-00-00.jv7ili2.mongodb.net'),
    ('159.41.176.155', 'ac-vngm77b-shard-00-01.jv7ili2.mongodb.net'),
    ('159.41.160.94', 'ac-vngm77b-shard-00-02.jv7ili2.mongodb.net')
]

for ip, hostname in pairs:
    context = ssl.create_default_context()
    context.check_hostname = False
    context.verify_mode = ssl.CERT_NONE

    try:
        with socket.create_connection((ip, 27017), timeout=5) as sock:
            with context.wrap_socket(sock, server_hostname=hostname) as ssock:
                print(f"Success! Connected to {ip} with SNI {hostname}")
    except Exception as e:
        print(f"Failed {ip} with SNI {hostname}: {e}")
