// Função para capturar os parâmetros da URL (GCLID, FBCLID e UTM)
function getURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    gclid: urlParams.get('gclid'),
    fbclid: urlParams.get('fbclid'),
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content')
  };
}

// Preencher os campos ocultos com os parâmetros capturados
document.addEventListener('DOMContentLoaded', function () {
  const params = getURLParams();

  if (params.gclid) {
    document.querySelector('input[name="gclid"]').value = params.gclid;
  }
  if (params.fbclid) {
    document.querySelector('input[name="fbclid"]').value = params.fbclid;
  }
  if (params.utm_source) {
    document.querySelector('input[name="utm_source"]').value = params.utm_source;
  }
  if (params.utm_medium) {
    document.querySelector('input[name="utm_medium"]').value = params.utm_medium;
  }
  if (params.utm_campaign) {
    document.querySelector('input[name="utm_campaign"]').value = params.utm_campaign;
  }
  if (params.utm_term) {
    document.querySelector('input[name="utm_term"]').value = params.utm_term;
  }
  if (params.utm_content) {
    document.querySelector('input[name="utm_content"]').value = params.utm_content;
  }
});