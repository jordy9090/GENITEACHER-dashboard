import { useState } from 'react';
import Card from '../../components/common/Card';

function QuestionCreatePage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <div>
      <h1>문항 만들기</h1>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>문제</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              style={{ width: '100%', minHeight: '100px', padding: '10px' }}
              placeholder="문제를 입력하세요"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>정답</label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              style={{ width: '100%', padding: '10px' }}
              placeholder="정답을 입력하세요"
            />
          </div>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            문항 저장
          </button>
        </div>
      </Card>
    </div>
  );
}

export default QuestionCreatePage;
