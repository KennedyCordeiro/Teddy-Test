import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  align-content: center;
`;

export const Title = styled.h2`
  color: #495057;
  margin-bottom: 20px;
  font-size: 1.25rem;
`;

export const List = styled.div`
  display: grid;
  flex-direction: column;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 1fr;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 0px solid var(--details-color);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h3`
  margin: 0 0 5px 0;
  color: #333;
  font-size: 1.2rem;
`;

export const Email = styled.p`
  margin: 0;
  color: #6c757d;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #667eea;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #dc3545;
  background: #f8d7da;
  border-radius: 8px;
  padding: 20px;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  color: #6c757d;
  font-style: italic;
`;

export const InfoFilters = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;

  .filter {
    margin-left: auto;
    color: var(--secondary-color);
  }
`;
