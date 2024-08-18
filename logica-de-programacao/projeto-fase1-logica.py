#################################################################
# Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS) #
# Lógica e Programação de Computadores - Projeto: Fase 1        #
# Aluno/Autor: Vitor Madalosso (vitor.madalosso@edu.pucrs.br)   #
#################################################################

# Função que valida a temperatura inserida pelo usuário
def validar_temperatura_maxima(temp_max):
    while True:
        try:
            temp_max = float(temp_max)
            if -90 <= temp_max <= 60:
                return temp_max
            else:
                print("Temperatura máxima inválida. Digite um valor entre -90 e 60.")
                temp_max = input("Digite a temperatura máxima novamente: ")
        except ValueError:
            print("Entrada inválida. Digite um número válido.")
            temp_max = input("Digite a temperatura máxima novamente: ")

# Função para obter o nome do mês através de um Vetor guardando os nomes dos meses
def obter_nome_mes(numero_mes):
    meses = [
        'janeiro', 'fevereiro', 'março', 'abril',
        'maio', 'junho', 'julho', 'agosto',
        'setembro', 'outubro', 'novembro', 'dezembro'
    ]
    return meses[numero_mes - 1]

# Variáveis
temperaturas_maximas = []
meses_escaldantes = 0
mes_escaldante = ""
mes_menos_quente = ""
temp_maxima_anual = 0

# Entrada dos dados
for mes in range(1, 13):
    while True:
        nome_mes = input(f"Digite o mês (de 1 a 12) para registrar a temperatura máxima: ")
        try:
            nome_mes = int(nome_mes)
            if 1 <= nome_mes <= 12:
                if nome_mes in temperaturas_maximas:
                    opcao = input("Temperatura já informada para esse mês. Deseja sobrescrever? (s/n): ")
                    if opcao.lower() == "s":
                        temperaturas_maximas.remove(nome_mes)
                        break
                    else:
                        continue
                break
            else:
                print("Mês inválido. Digite um número entre 1 e 12.")
        except ValueError:
            print("Entrada inválida. Digite um número correspondente ao mês.")

    nome_mes_extenso = obter_nome_mes(nome_mes)

    while True:
        temp_max = input(f"Digite a temperatura máxima de {nome_mes_extenso}: ")
        temp_max = validar_temperatura_maxima(temp_max)
        temperaturas_maximas.append(nome_mes)

        if temp_max > 40:
            meses_escaldantes += 1
            if mes_escaldante == "":
                mes_escaldante = nome_mes_extenso

        temp_maxima_anual += temp_max
        break

# Cálculo das estatísticas
media_temp_maxima_anual = temp_maxima_anual / 12
mes_mais_escaldante = obter_nome_mes(temperaturas_maximas.index(max(temperaturas_maximas)) + 1)
mes_menos_quente = obter_nome_mes(temperaturas_maximas.index(min(temperaturas_maximas)) + 1)

# Exibição dos resultados
print("\nEstatísticas dos dados meteorológicos de 2021:")
print(f"Temperatura média máxima anual: {media_temp_maxima_anual:.2f} graus Celsius")
print(f"Quantidade de meses escaldantes: {meses_escaldantes}")
print(f"Mês mais escaldante do ano: {mes_mais_escaldante}")
print(f"Mês menos quente do ano: {mes_menos_quente}")
