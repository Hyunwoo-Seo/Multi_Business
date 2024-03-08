import styled from "styled-components";

const UserInfoContainer = styled.div`
  margin: 20px;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Header = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const UserInfoItem = styled.div`
  margin-bottom: 10px;
`;

const UserInfoLabel = styled.span`
  font-weight: bold;
`;

const UserInfoValue = styled.span`
  margin-left: 10px;
`;

const EditButton = styled.button`
  background-color: #fe6b00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

const UserInfoPage = () => {
  const userInfo = {
    id: "123456",
    password: "123456",
    name: "INSIK",
    phoneNumber: "123-456-7890",
    email: "INSIK@example.com",
  };

  const handleOpenModal = () => {
    const password = prompt("Enter your password:");
    if (password === userInfo.password) {
      alert("Password 일치!");
    } else {
      alert("Password 불일치!");
    }
  };

  return (
    <UserInfoContainer>
      <Header>Mypage</Header>
      <UserInfoItem>
        <UserInfoLabel>ID:</UserInfoLabel>
        <UserInfoValue>{userInfo.id}</UserInfoValue>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoLabel>Password:</UserInfoLabel>
        <UserInfoValue>************</UserInfoValue>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoLabel>이름:</UserInfoLabel>
        <UserInfoValue>{userInfo.name}</UserInfoValue>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoLabel>전화번호:</UserInfoLabel>
        <UserInfoValue>{userInfo.phoneNumber}</UserInfoValue>
      </UserInfoItem>
      <UserInfoItem>
        <UserInfoLabel>Email:</UserInfoLabel>
        <UserInfoValue>{userInfo.email}</UserInfoValue>
      </UserInfoItem>
      <EditButton onClick={handleOpenModal}>회원 정보 수정</EditButton>
    </UserInfoContainer>
  );
};

export default UserInfoPage;
