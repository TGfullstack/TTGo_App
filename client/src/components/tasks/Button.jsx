const { Button } = require('@heroui/react');

export function TaskButton({ onClick }) {
  return (
    <Button color="primary" onPress={onClick}>
      New Task
    </Button>
  );
}
