import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Link,
  Section,
  Hr
} from '@react-email/components';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
}

export function AdminEmailTemplate({ name, email, phone }: ContactFormData) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Header Section */}
          <Section style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
          }}>
            <Heading style={{ margin: 0, fontSize: '24px', color: 'white' }}>
              РИМСКИЕ ШТОРЫ
            </Heading>
            <Text style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9, color: 'white' }}>
              Салон текстильного дизайна
            </Text>
          </Section>

          {/* Content Section */}
          <Section style={{ padding: '30px 20px', backgroundColor: '#f9f9f9' }}>
            <Heading style={{
              color: '#2c3e50',
              fontSize: '20px',
              marginTop: 0,
              marginBottom: '20px'
            }}>
              Новая заявка с сайта
            </Heading>

            <Section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
              <Section style={{ marginBottom: '15px' }}>
                <Text style={{ fontWeight: 'bold', color: '#d4a373', margin: 0 }}>Имя:</Text>
                <Text style={{ marginTop: '5px', fontSize: '16px' }}>{name}</Text>
              </Section>

              <Section style={{ marginBottom: '15px' }}>
                <Text style={{ fontWeight: 'bold', color: '#d4a373', margin: 0 }}>Email:</Text>
                <Text style={{ marginTop: '5px', fontSize: '16px' }}>
                  <Link href={`mailto:${email}`} style={{ color: '#2c3e50' }}>{email}</Link>
                </Text>
              </Section>

              <Section style={{ marginBottom: '15px' }}>
                <Text style={{ fontWeight: 'bold', color: '#d4a373', margin: 0 }}>Телефон:</Text>
                <Text style={{ marginTop: '5px', fontSize: '16px' }}>
                  <Link href={`tel:${phone}`} style={{ color: '#2c3e50' }}>{phone}</Link>
                </Text>
              </Section>

              <Section style={{ marginTop: '20px', paddingTop: '15px' }}>
                <Hr style={{ borderColor: '#eee' }} />
                <Text style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                  Дата: {new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Vladivostok' })}
                </Text>
              </Section>
            </Section>
          </Section>

          {/* Footer Section */}
          <Section style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '15px 20px',
            textAlign: 'center',
            fontSize: '12px'
          }}>
            <Text style={{ margin: 0, opacity: 0.8, color: 'white' }}>
              г. Хабаровск, ул. Гамарника, д. 43а
            </Text>
            <Text style={{ margin: '5px 0 0 0', opacity: 0.8, color: 'white' }}>
              (4212) 45-41-54 • +7 914 190 3086
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
