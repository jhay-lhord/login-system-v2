import useAuthStore from "@/Auth/AuthStore";

const UserDashboard = () => {
  const {user} = useAuthStore();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-2xl font-bold">User Information</p>
      <div>
        <p>First Name : {user?.first_name}</p>
        <p>Last Name : {user?.last_name}</p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
