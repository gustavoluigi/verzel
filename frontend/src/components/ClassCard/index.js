import Button from '../Button';
import { Container } from './styles';

function ClassCard() {
  return (
    <Container>
      <h3>Aula 01</h3>
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.46749 1.37903V3.37903"
          stroke="#ABC616"
          strokeWidth="0.571033"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.13411 1.37903V3.37903"
          stroke="#ABC616"
          strokeWidth="0.571033"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0924 2.37903H3.50911C2.91057 2.37903 2.42578 2.82653 2.42578 3.37903V9.87903C2.42578 10.4315 2.91057 10.879 3.50911 10.879H11.0924C11.691 10.879 12.1758 10.4315 12.1758 9.87903V3.37903C12.1758 2.82653 11.691 2.37903 11.0924 2.37903Z"
          stroke="#ABC616"
          strokeWidth="0.571033"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.6"
          d="M2.42578 4.87903H12.1758"
          stroke="#ABC616"
          strokeWidth="0.571033"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="date">
        10/03/2022
      </p>
      <Button to="/" className="full purple">
        Assitir a aula
      </Button>
    </Container>
  );
}

export default ClassCard;
