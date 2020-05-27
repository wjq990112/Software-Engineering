/**
 * @file 列表项组件测试
 * @author 炽翎
 */
import { createElement } from 'rax';
import renderer from 'rax-test-renderer';
import ListItem, { IListItemProps } from './index';

describe('Test ListItem Component', () => {
  // 测试显示
  it('Test ListItem Show', () => {
    const props: IListItemProps = {
      iconUrl: '',
      title: 'Test',
      itemSum: 0
    };
    const component = renderer.create(<ListItem {...props} />);
    const tree = component.toJSON();
    expect(tree.tagName).toEqual('DIV');
    expect(tree.children[0].tagName).toEqual('DIV');
    expect(tree.children[0].children[1].tagName).toEqual('SPAN');
    expect(tree.children[0].children[2].tagName).toEqual('SPAN');
    expect(tree.children[0].children[1].children[0]).toEqual(props.title);
    expect(tree.children[0].children[2].children[0]).toEqual(
      `${props.itemSum}`
    );
  });

  // 测试点击
  it('Test ListItem Touch', () => {
    const props: IListItemProps = {
      iconUrl: '',
      title: 'Test',
      itemSum: 0,
      onTouchStart: jest.fn(),
      onTouchEnd: jest.fn()
    };
    const component = renderer.create(<ListItem {...props} />);
    const tree = component.toJSON();
    tree.children[0].eventListeners.touchstart();
    expect(props.onTouchStart).toHaveBeenCalled();
    tree.children[0].eventListeners.touchend();
    expect(props.onTouchEnd).toHaveBeenCalled();
  });
});
