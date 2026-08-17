from src.app import (
    cadastrar_funcionario,
    listar_funcionarios,
    buscar_funcionario,
    remover_funcionario
)


def test_cadastrar_funcionario():
    funcionario = cadastrar_funcionario(
        "Joao",
        20,
        "joao@email.com"
    )

    assert funcionario["nome"] == "Joao"
    assert funcionario["idade"] == 20
    assert funcionario["email"] == "joao@email.com"


def test_listar_funcionarios():
    funcionarios = listar_funcionarios()

    assert len(funcionarios) > 0


def test_buscar_funcionario():
    funcionario = buscar_funcionario("Joao")

    assert funcionario is not None
    assert funcionario["nome"] == "Joao"


def test_remover_funcionario():
    resultado = remover_funcionario("Joao")

    assert resultado is True