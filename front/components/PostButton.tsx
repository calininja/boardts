import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { RootState } from '../reducers';

const PostButton: React.FunctionComponent = () => {
  const { me } = useSelector( (state: RootState) => state.user );

  const onTogglePost = useCallback(():void => {
    if( !me ) {
        alert('로그인이 필요합니다.');
    } else {
        Router.push('/PostForm');
    }
  },[])

  return (
    <>
      <button type="button" onClick={onTogglePost} className="custom-button">글 쓰기</button>
    </>
  );
};

export default PostButton;