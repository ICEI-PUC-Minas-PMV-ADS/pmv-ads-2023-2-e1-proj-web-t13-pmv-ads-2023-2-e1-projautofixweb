# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Perfil Proprietário/Gerente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsável pela gestão geral da oficina, tomada de decisões estratégicas e financeiras, relacionamento com fornecedores e, por vezes, com clientes importantes. Realizar investimentos inclusive em tecnologia.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Precisa de visibilidade e controle sobre todos os processos da oficina, desde o financeiro até a satisfação do cliente. Relatórios gerenciais, informações sobre lucratividade, eficiência das operações e feedbacks dos clientes são essenciais. Também pode realizar cobranças e transações bancárias. </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Perfil Recepcionista/Atendente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Primeiro ponto de contato do cliente com a oficina. Agenda serviços, realiza atendimento telefônico, e em alguns casos, pode ser responsável pelo orçamento inicial. Pode realizar cobranças.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Precisa de um sistema eficiente de agendamento, informações claras sobre os serviços oferecidos e acesso ao histórico dos clientes. </td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Perfil Cliente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Proprietário do veículo que busca a oficina para manutenção, reparos ou consultas. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Precisa de informações claras sobre os serviços a serem realizados, orçamentos, prazos, garantias e um canal eficiente de comunicação com a oficina para dúvidas e feedbacks.  </td>
</tr>
</tbody>
</table>

## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Proprietário       | eu quero ter acesso a relatórios financeiros detalhados              | para que possa tomar decisões estratégicas informadas e garantir a lucratividade do negócio.                               |
| Recepcionista      | acessar uma interface amigável no site.                        | eu possa rapidamente atualizar o status das reservas, realizar check-in/check-out dos clientes e responder a qualquer pergunta ou solicitação deles via chat.                               |
| Cliente            | visitar o site e facilmente encontrar disponibilidade, preços.                       | eu possa fazer uma reserva com confiança e ainda comunicar-me com a recepção para qualquer esclarecimento.                               |
## Requisitos do Projeto


### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  O sistema deve fornecer um painel com gráficos e métricas de desempenho relacionados a serviços realizados, peças em estoque, finanças e satisfação do cliente, permitindo uma visão ampla e detalhada do funcionamento da oficina.                    | ALTA  | 
| RF-02  | Permitir que o gerente adicione, remova ou altere peças e ferramentas em estoque, além de definir alertas para quando o estoque de determinadas peças estiver abaixo do mínimo desejado.                 | MÉDIA |
| RF-03  |Possibilidade de adicionar, editar ou remover funcionários, atualizando seus cargos, contatos e outras informações relevantes.                  | BAIXA |
| RF-04  |Uma interface que permite agendar, reagendar ou cancelar serviços para os clientes, e que se integre ao sistema geral da oficina, atualizando automaticamente a disponibilidade de horários e técnicos.                   | ALTA |
| RF-05  |Permitir acesso rápido e fácil ao histórico de serviços realizados em um veículo específico ao inserir sua placa ou VIN, facilitando o atendimento ao cliente e a identificação de possíveis problemas recorrentes.                  | MÉDIA |
| RF-06  |Uma seção onde a recepcionista pode registrar feedbacks ou reclamações dos clientes para futuras referências ou ações.                | BAIXA |
| RF-07  |Uma área dedicada onde o cliente pode fazer login, ver o histórico de seus veículos, agendar novos serviços, e verificar status de serviços em andamento.                   | ALTA |
| RF-08  |Permitir que o cliente insira detalhes sobre o serviço necessário e receba uma cotação aproximada baseada nas tarifas e disponibilidade de peças da oficina.                   | MÉDIA |
| RF-09  |Um mapa ou sistema de localização para ajudar novos clientes a encontrar a oficina mecânica, fornecendo também informações sobre horário de funcionamento e contatos.                 | BAIXA |
**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais



|ID          | Descrição               |Prioridade |
|-----------|-------------------------|----|
| RNF-01    |  O sistema deve implementar mecanismos avançados de criptografia e autenticação, garantindo que informações sensíveis (como dados financeiros e informações de clientes) estejam protegidas contra acessos não autorizados e possíveis ameaças cibernéticas.                 | ALTA| 
| RNF-02    |  O sistema deve ser construído de uma maneira que permita acomodar um aumento no volume de dados (como registros de clientes, serviços e peças) sem comprometer o desempenho e a velocidade de acesso.                     | MÉDIA   | 
| RNF-03    |  A interface do painel de gerenciamento deve ser clara e de fácil compreensão, permitindo que o gerente acesse as funções rapidamente e sem necessidade de treinamento extenso.                      | BAIXA   |
| RNF-04    |  AO sistema deve garantir tempos de resposta rápidos, evitando longas esperas e assegurando que a recepcionista possa atender aos clientes de forma eficiente.                       | ALTA   |
| RNF-05    | O sistema deve ser compatível com diferentes dispositivos e navegadores, permitindo que a recepcionista acesse as informações tanto de um computador desktop quanto de um tablet ou smartphone.                      | MÉDIA   |
| RNF-06    |  A interface deve permitir algumas personalizações simples, como ajuste de tamanho de fonte ou modo noturno, para acomodar as preferências individuais da recepcionista.                       | BAIXA   |
| RNF-07    |  O site deve ter uma alta disponibilidade, garantindo que os clientes possam acessá-lo a qualquer momento, sem enfrentar períodos de inatividade.                     | ALTA  |
| RNF-08    |  O site deve seguir padrões de acessibilidade, garantindo que pessoas com deficiências (como deficiência visual ou auditiva) possam navegar e utilizar suas funcionalidades sem barreiras.                      | MÉDIA   |
| RNF-09    |  O site deve oferecer a opção de tradução para diferentes idiomas, considerando a diversidade de clientes que podem procurar os serviços da oficina em uma área multicultural ou turística.                   | BAIXA   |

**Prioridade: Alta / Média / Baixa..

