import { useState } from 'react';
import { MessageCircle, Send, Phone, User, AlertCircle, CheckCircle } from 'lucide-react';

const WhatsAppComponent = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    message: '',
    template: 'custom'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [responseType, setResponseType] = useState(''); // 'success' or 'error'

  // Templates pré-definidos
  const messageTemplates = {
    custom: '',
    greeting: 'Olá! Esperamos que esteja bem. Como podemos ajudá-lo hoje?',
    appointment: 'Lembramos que você tem um compromisso agendado. Confirme sua presença.',
    promotion: 'Oferta especial! Não perca essa oportunidade única. Válida até o final do mês.',
    support: 'Recebemos sua solicitação de suporte. Nossa equipe entrará em contato em breve.'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTemplateChange = (e) => {
    const template = e.target.value;
    setFormData(prev => ({
      ...prev,
      template,
      message: messageTemplates[template] || ''
    }));
  };

  const formatPhoneNumber = (phone) => {
    // Remove caracteres não numéricos
    const cleaned = phone.replace(/\D/g, '');
    
    // Adiciona código do país se não tiver
    if (cleaned.length === 11 && cleaned.startsWith('0')) {
      return `55${cleaned.substring(1)}`;
    } else if (cleaned.length === 11) {
      return `55${cleaned}`;
    } else if (cleaned.length === 13 && cleaned.startsWith('55')) {
      return cleaned;
    }
    
    return cleaned;
  };

  const sendWhatsAppMessage = async () => {
    setIsLoading(true);
    setResponse('');
    
    try {
      // Validação básica
      if (!formData.phoneNumber || !formData.message) {
        throw new Error('Telefone e mensagem são obrigatórios');
      }

      const formattedPhone = formatPhoneNumber(formData.phoneNumber);
      
      // Simulação da API do WhatsApp Business
      // Na prática, você usaria a API real aqui
      const apiData = {
        messaging_product: "whatsapp",
        to: formattedPhone,
        type: "text",
        text: {
          body: formData.message
        }
      };

      // Simulando chamada à API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulando resposta da API
      const mockResponse = {
        messages: [{
          id: 'msg_' + Date.now(),
          message_status: 'sent'
        }],
        messaging_product: 'whatsapp',
        contacts: [{
          input: formattedPhone,
          wa_id: formattedPhone
        }]
      };

      setResponse(`Mensagem enviada com sucesso para +${formattedPhone}! ID: ${mockResponse.messages[0].id}`);
      setResponseType('success');
      
      // Limpar formulário
      setFormData({
        phoneNumber: '',
        message: '',
        template: 'custom'
      });

    } catch (error) {
      setResponse(`Erro ao enviar mensagem: ${error.message}`);
      setResponseType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-100 rounded-full">
          <MessageCircle className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">WhatsApp API</h2>
          <p className="text-gray-600">Envie mensagens via WhatsApp Business</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Número de telefone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="inline w-4 h-4 mr-1" />
            Número de telefone
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="(11) 99999-9999"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Formato: (11) 99999-9999 ou 5511999999999
          </p>
        </div>

        {/* Template de mensagem */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Template de mensagem
          </label>
          <select
            value={formData.template}
            onChange={handleTemplateChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          >
            <option value="custom">Mensagem personalizada</option>
            <option value="greeting">Saudação</option>
            <option value="appointment">Lembrete de compromisso</option>
            <option value="promotion">Promoção</option>
            <option value="support">Suporte</option>
          </select>
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageCircle className="inline w-4 h-4 mr-1" />
            Mensagem
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Digite sua mensagem aqui..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Máximo 1000 caracteres
          </p>
        </div>

        {/* Botão de envio */}
        <button
          type="button"
          onClick={sendWhatsAppMessage}
          disabled={isLoading}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <Send className="w-5 h-5" />
          )}
          <span>{isLoading ? 'Enviando...' : 'Enviar Mensagem'}</span>
        </button>
      </div>

      {/* Resposta da API */}
      {response && (
        <div className={`mt-6 p-4 rounded-lg flex items-start gap-3 ${
          responseType === 'success' 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          {responseType === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          )}
          <p className={`text-sm ${
            responseType === 'success' ? 'text-green-700' : 'text-red-700'
          }`}>
            {response}
          </p>
        </div>
      )}

      {/* Informações adicionais */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">
          ℹ️ Informações importantes:
        </h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Esta é uma simulação da API do WhatsApp Business</li>
          <li>• Para usar em produção, configure suas credenciais da API</li>
          <li>• Números devem estar no formato internacional</li>
          <li>• Mensagens são limitadas a 1000 caracteres</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatsAppComponent;