function getEmergencyInfo() {
    const statusDiv = document.getElementById('localizacao-status');
    const dadosDiv = document.getElementById('dados-emergencia');
    const abrigosList = document.getElementById('abrigos-lista');
    const alertasDiv = document.getElementById('alertas-dinamicos');

    statusDiv.innerHTML = 'Aguardando sua permissão de geolocalização...';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                statusDiv.innerHTML = `Localização encontrada: Latitude ${lat}, Longitude ${lon}`;
                dadosDiv.style.display = 'block';

                // **Simulação de dados de emergência**
                // Em um projeto real, aqui você faria uma chamada API para um serviço de mapas ou governo.
                const abrigos = [
                    'Abrigo A, Rua da Esperança, 123',
                    'Abrigo B, Avenida do Resgate, 456',
                    'Abrigo C, Praça da Solidariedade, 789'
                ];
                abrigosList.innerHTML = abrigos.map(abrigo => `<li><i class="fas fa-location-dot"></i> ${abrigo}</li>`).join('');

                const alertas = [
                    'Alerta: Risco de deslizamento de terra na região X.',
                    'Aviso: Estradas Y e Z fechadas devido a inundações.'
                ];
                alertasDiv.innerHTML = alertas.map(alerta => `<p><i class="fas fa-triangle-exclamation"></i> ${alerta}</p>`).join('');

            },
            (error) => {
                statusDiv.innerHTML = `Erro ao obter localização: ${error.message}. Verifique as permissões do seu navegador.`;
                console.error('Erro de Geolocalização:', error);
            }
        );
    } else {
        statusDiv.innerHTML = 'Geolocalização não é suportada por este navegador.';
    }
}