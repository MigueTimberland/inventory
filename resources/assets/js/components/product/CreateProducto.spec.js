import { mount } from '@vue/test-utils';
import CreateProducto from '@/components/product/CreateProducto.vue';

describe('CreateProducto', () => {
  it('renders correctly', () => {
    const wrapper = mount(CreateProducto);
    expect(wrapper.element).toMatchSnapshot();
  });
});
