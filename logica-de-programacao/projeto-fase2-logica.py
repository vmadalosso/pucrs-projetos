#################################################################
# Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS) #
# Lógica e Programação de Computadores - Projeto: Fase 2        #
# Aluno/Autor: Vitor Madalosso (vitor.madalosso@edu.pucrs.br)   #
#################################################################

import csv
import matplotlib.pyplot as plt

# Função para ler os dados do arquivo CSV
def ler_arquivo_csv():
    dados = []
    with open('dados_climaticos.csv', 'r') as arquivo:
        leitor = csv.reader(arquivo, delimiter=';')
        # Ignorar o cabeçalho
        next(leitor)
        for linha in leitor:
            # Extrair os dados de cada linha do arquivo
            data = linha[0]
            precipitacao = float(linha[1])
            temperatura_maxima = float(linha[2])
            temperatura_minima = float(linha[3])
            umidade_relativa = float(linha[4])
            velocidade_vento = float(linha[5])
            # Descartar dados negativos para precipitação
            if precipitacao >= 0:
                # Adicionar os dados à lista
                dados.append((data, precipitacao, temperatura_maxima, temperatura_minima, umidade_relativa, velocidade_vento))
    return dados

# Função para filtrar e retornar os dados dentro de um intervalo de datas
def visualizar_dados(dados, mes_inicial, ano_inicial, mes_final, ano_final, tipo_dados):
    meses = {
        '01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho',
        '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'
    }
    # Converter os valores de mês e ano para strings
    mes_inicial = str(mes_inicial).zfill(2)
    mes_final = str(mes_final).zfill(2)
    ano_inicial = str(ano_inicial)
    ano_final = str(ano_final)
    dados_filtrados = []
    for dado in dados:
        # Extrair a data de cada dado
        data = dado[0]
        valores = data.split('/')
        if len(valores) != 3:
            print(f"Formato de data inválido: {data}")
            continue
        dia, mes, ano = valores
        # Verificar se a data está dentro do intervalo desejado
        if (mes_inicial <= mes <= mes_final) and (ano_inicial <= ano <= ano_final):
            # Adicionar os dados filtrados à lista
            dados_filtrados.append(dado)
    # Verificar o tipo de dados selecionado
    if tipo_dados == '1':
        # Todos os dados
        for dado in dados_filtrados:
            print(f"Data: {dado[0]}")
            print(f"Precipitação: {dado[1]} mm")
            print(f"Temperatura Máxima: {dado[2]}°C")
            print(f"Temperatura Mínima: {dado[3]}°C")
            print(f"Umidade Relativa: {dado[4]}%")
            print(f"Velocidade do Vento: {dado[5]} km/h")
            print('---')
    elif tipo_dados == '2':
        # Apenas precipitação
        for dado in dados_filtrados:
            print(f"Data: {dado[0]}")
            print(f"Precipitação: {dado[1]} mm")
            print('---')
    elif tipo_dados == '3':
        # Apenas temperatura
        for dado in dados_filtrados:
            print(f"Data: {dado[0]}")
            print(f"Temperatura Máxima: {dado[2]}°C")
            print(f"Temperatura Mínima: {dado[3]}°C")
            print('---')
    elif tipo_dados == '4':
        # Apenas umidade e vento
        for dado in dados_filtrados:
            print(f"Data: {dado[0]}")
            print(f"Umidade Relativa: {dado[4]}%")
            print(f"Velocidade do Vento: {dado[5]} km/h")
            print('---')
    else:
        print("Tipo de dados inválido.")

# Função para determinar o mês mais chuvoso
def mes_mais_chuvoso(dados):
    meses = {
        '01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho',
        '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'
    }
    precipitacao_por_mes_ano = {}
    for dado in dados:
        data = dado[0].split('/')
        mes = data[1]
        ano = data[2]
        precipitacao = float(dado[1])
        mes_ano = f"{mes}/{ano}"
        if mes_ano in precipitacao_por_mes_ano:
            precipitacao_por_mes_ano[mes_ano] += precipitacao
        else:
            precipitacao_por_mes_ano[mes_ano] = precipitacao
    mes_ano_mais_chuvoso = max(precipitacao_por_mes_ano, key=precipitacao_por_mes_ano.get)
    maior_precipitacao = precipitacao_por_mes_ano[mes_ano_mais_chuvoso]
    mes_mais_chuvoso, ano_mais_chuvoso = mes_ano_mais_chuvoso.split('/')
    print(f"O mês mais chuvoso é {meses[mes_mais_chuvoso]}, referente ao ano {ano_mais_chuvoso}.")
    print(f"Maior precipitação: {maior_precipitacao} mm")

# Função para calcular a média da temperatura mínima de um determinado mês
def media_temperatura_minima(dados, mes):
    soma_temperatura = 0
    contador = 0
    media_geral = 0
    contador_geral = 0
    for linha in dados:
        # Extrair a data e a temperatura mínima de cada dado
        data = linha[0]
        temperatura_minima = float(linha[3])
        mes_dado = int(data.split('/')[1])
        ano_dado = int(data.split('/')[2])
        # Verificar se o mês do dado corresponde ao mês desejado
        if mes_dado == mes:
            soma_temperatura += temperatura_minima
            contador += 1
            if mes == 8:
                media_geral += temperatura_minima
                contador_geral += 1
    if contador > 0:
        media = soma_temperatura / contador
        # Imprimir o resultado
        print(f"A média da temperatura mínima para o mês {mes} nos últimos 11 anos (2006 a 2016) é {media:.2f}°C.")
    else:
        print(f"Não há dados disponíveis para o mês {mes}.")

    if mes == 8 and contador_geral > 0:
        media_geral /= contador_geral
        print(f"A média geral da temperatura mínima para todos os meses de agosto é {media_geral:.2f}°C.")
    elif mes == 8 and contador_geral == 0:
        print("Não há dados disponíveis para os meses de agosto.")


# Função para plotar um gráfico de precipitação mensal
def plotar_grafico_precipitacao(dados):
    meses = {
        '01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril', '05': 'Maio', '06': 'Junho',
        '07': 'Julho', '08': 'Agosto', '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'
    }
    precipitacao_por_mes = {}
    for dado in dados:
        # Extrair a data de cada dado
        data = dado[0]
        valores = data.split('/')
        if len(valores) != 3:
            print(f"Formato de data inválido: {data}")
            continue
        dia, mes, ano = valores
        # Calcular a precipitação acumulada por mês
        if mes not in precipitacao_por_mes:
            precipitacao_por_mes[mes] = 0
        precipitacao = float(dado[1])
        if precipitacao > 0:
            precipitacao_por_mes[mes] += precipitacao
    # Preparar os dados para o gráfico
    meses_grafico = []
    precipitacao_grafico = []
    for mes in meses.keys():
        meses_grafico.append(meses[mes])
        precipitacao_grafico.append(precipitacao_por_mes.get(mes, 0))
    # Plotar o gráfico
    plt.bar(meses_grafico, precipitacao_grafico)
    plt.xlabel('Mês')
    plt.ylabel('Precipitação (mm)')
    plt.title('Precipitação Mensal')
    plt.show()

# Função para exibir o menu principal
def exibir_menu():
    print("1 - Visualizar dados de um período")
    print("2 - Calcular o mês mais chuvoso")
    print("3 - Calcular média de temperatura mínima de um mês")
    print("4 - Plotar gráfico de precipitação mensal")
    print("0 - Sair")

# Função para ler a opção do usuário
def ler_opcao():
    opcao = input("Digite a opção desejada: ")
    return opcao

# Função principal
def main():
    # Ler os dados do arquivo CSV
    dados_climaticos = ler_arquivo_csv()
    # Loop do programa
    while True:
        # Exibir o menu principal
        exibir_menu()
        # Ler a opção do usuário
        opcao = ler_opcao()
        # Verificar a opção selecionada
        if opcao == '1':
            # Pedir as datas de início e fim do período
            mes_inicial = int(input("Digite o mês inicial (1-12): "))
            ano_inicial = int(input("Digite o ano inicial: "))
            mes_final = int(input("Digite o mês final (1-12): "))
            ano_final = int(input("Digite o ano final: "))
            # Pedir o tipo de dados a serem exibidos
            tipo_dados = input("Digite o tipo de dados a serem exibidos (1)Todos os dados (2)Precipitação (3)Temperaturas (4)Umidade Rel. & Vel. Vento): ")
            # Visualizar os dados do período informado
            visualizar_dados(dados_climaticos, mes_inicial, ano_inicial, mes_final, ano_final, tipo_dados)
        elif opcao == '2':
            # Calcular e exibir o mês mais chuvoso
            mes_mais_chuvoso(dados_climaticos)
        elif opcao == '3':
            # Pedir o mês para calcular a média da temperatura mínima
            mes = int(input("Digite o mês (1-12): "))
            # Calcular e exibir a média da temperatura mínima
            media_temperatura_minima(dados_climaticos, mes)
        elif opcao == '4':
            # Plotar o gráfico de precipitação mensal
            plotar_grafico_precipitacao(dados_climaticos)
        elif opcao == '0':
            # Encerrar o programa
            print("Programa encerrado.")
            break
        else:
            print("Opção inválida. Digite novamente.")

# Executar o programa
main()