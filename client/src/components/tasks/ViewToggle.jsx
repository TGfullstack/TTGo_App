'use client';
Button;
import { Button, ButtonGroup } from '@heroui/react';

export default function ViewToggle({ view, onChange }) {
  return (
    <ButtonGroup>
      <Button
        onPress={() => onChange('list')}
        color={view === 'list' ? 'primary' : 'default'}
      >
        List
      </Button>
      <Button
        onPress={() => onChange('kanban')}
        color={view === 'kanban' ? 'primary' : 'default'}
      >
        Kanban
      </Button>
    </ButtonGroup>
  );
}
