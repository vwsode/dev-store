import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 28px 0;
  max-width: 380px;
  margin: 0 auto;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const FormActions = styled.div``;
export const FormPolicy = styled.div`
  color: var(--gray-800);
  font-size: 14px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export const FormMessage = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: var(--gray-800);
  text-align: center;

  a {
    color: var(--gray-200);
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
  color: var(--gray-200);
  text-align: center;
`;

export const Description = styled.p`
  font-size: 16px;
  text-align: center;
  color: var(--gray-400);
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 24px;
`;
