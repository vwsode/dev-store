import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 28px 0;
  max-width: 380px;
  margin: 0 auto;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 24px;
`;
export const Title = styled.h5`
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
  color: var(--gray-200);
  text-align: center;
`;
export const Form = styled.form``;
export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const FormPolicy = styled.p`
  color: var(--gray-800);
  font-size: 14px;
  padding: 20px 0;
  text-align: center;

  a {
    color: inherit;
  }
`;
export const Message = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: var(--gray-800);
  text-align: center;

  a {
    color: var(--gray-200);
  }
`;