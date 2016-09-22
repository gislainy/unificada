<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <meta charset="ISO-8859-1">
    <title>Aprovacao</title>
</head>

<body>
    <div class="container">
        <form class="form-horizontal" method="post" action="result">
            <fieldset>
                <div class="form-group">
                    <label for="nome" class="col-lg-1 control-label">Nome</label>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" name="nome" value="${param.nome}" placeholder="Nome do aluno">
                    </div>
                    <label for="frequencia" class="col-lg-1 control-label">Frequencia</label>
                    <div class="col-lg-2">
                        <input type="number" step="any" class="form-control" name="frequencia" value="${param.frequencia}" placeholder="Frequencia do aluno em porcentagem (sem %)">
                    </div>
                    <label for="notaFinal" class="col-lg-1 control-label">Nota final</label>
                    <div class="col-lg-2">
                        <input type="number" step="any" class="form-control" name="notaFinal" value="${param.notaFinal}" placeholder="Nota final do aluno">
                    </div>
                    <div class="col-lg-2">
                        <button type="submit" class="btn btn-primary">Calcular</button>
                    </div>
                </div>
    </div>
    </fieldset>
    </form>
    <p style="margin-left: 500px; font-size: 40px;">
        ${nome} ${resultado}
    </p>
    </div>
    </div>
    </div>
</body>

</html>