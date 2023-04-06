plk = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas Praktikum 2</title>
</head>
<body>
<script src="../vendor/p5.min.js"></script>
<script src="../vendor/2.{}.js"></script>
</body>
</html>
"""

for i in range(7):
    d = i+1
    with open("./pages/2.{}.html".format(d),"w") as f:
        f.write(plk.format(d))
        f.close()