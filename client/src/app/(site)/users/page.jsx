'use client';
// import { fetchUsers } from "@/lib/api";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  User,
} from '@heroui/react';
import { Suspense, useEffect, useState } from 'react';
export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isFollowed, setIsFollowed] = useState(false);
  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/api/v1/users');
    const data = await response.json();
    console.log(data.users);
    setUsers(data.users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex gap-2">
        {users.map((user) => (
          <Card key={user._id} className="p-4 max-w-[340px] mr-4">
            <CardHeader className="flex justify-between">
              <div className="flex flex-row gap-4">
                {/* <Avatar src={`${user.image}`} radius="full" alt="User Image" size="lg" className="relative"/> */}
                <User
                  src={user?.image}
                  description={user.username}
                  name={`${user.first_name}` + '' + `${user.last_name}`}
                />
              </div>
              <Button
                className={
                  isFollowed
                    ? 'bg-transparent text-foreground border-default-200'
                    : ''
                }
                color="primary"
                radius="full"
                size="md"
                variant={isFollowed ? 'bordered' : 'solid'}
                onPress={() => setIsFollowed(!isFollowed)}
              >
                {isFollowed ? 'Unfollow' : 'Follow'}
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
              <span className="pt-2">
                #FrontendWithZoey
                <span aria-label="computer" className="py-2" role="img">
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">4</p>
                <p className=" text-default-400 text-small">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  97.1K
                </p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Suspense>
  );
}
