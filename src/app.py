funcionarios = []

def cadastrar_funcionario(nome, idade, email):
    funcionario = {
        "nome": nome,
        "idade": idade,
        "email": email
    }

    funcionarios.append(funcionario)

    return funcionario


def listar_funcionarios():
    return funcionarios


def buscar_funcionario(nome):
    for funcionario in funcionarios:
        if funcionario["nome"] == nome:
            return funcionario

    return None


def remover_funcionario(nome):
    funcionario = buscar_funcionario(nome)

    if funcionario:
        funcionarios.remove(funcionario)
        return True

    return False