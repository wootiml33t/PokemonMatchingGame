import styled from "styled-components";

export const SelectWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Select = styled.select`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.button};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: 1.1em;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Label = styled.label`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;
