var cidadeDetalhe = {
  id: 'nanuque-mg',
  nome: 'Nanuque',
  uf: 'MG',
  ibge: '3144300',
  constante: 'CodigoIBGE.NanuqueMG',
  provedorAtual: {
    nome: 'EeLv3',
    namespace: 'http://www.abrasf.org.br/nfse.xsd',
    codigoNoProvedor: 'UsaServicoMunicipalComFormatacao;NaoUsaCnae;UsaDocumentoTomadorExterior;NaoSuportaEmissaoClienteSemEndereco;NaoSuportaEmissaoSemCliente',
    robo: false,
    webService: true,
    urls: {
      homologacao: {
      },
      producao: {
        recepcaoLote: 'https://mg-nanuque-pm-nfs-backend.cloud.el.com.br/producao06/NfseWSService'
      }
    }
  }
};
