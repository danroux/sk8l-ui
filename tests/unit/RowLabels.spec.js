// RowLabels.spec.js
// import { describe, test, expect } from 'vitest';
import { expect, test } from 'vitest'
import { render } from '@testing-library/vue'
import BoxRow from '@/components/RowLabels.vue'

test('it returns Failed/Done when it already failed', () => {
    const job = {
        succedded: false
    }
    const { getByText, container } = render(BoxRow, {
    props: {
        status: "Failed",
        job: job,
    }
  })

    const x = container.querySelectorAll('span.Label');
    expect(x.length).toBe(2);
    expect(x[0].textContent).toBe("Failed");
    expect(x[1].textContent).toBe("Done");

    // x.forEach((item) => {
    //     console.log(item.textContent);
    // });
})

test('it returns Active', () => {
    const job = {
        succedded: false
    }
    const { getByText, container } = render(BoxRow, {
    props: {
        status: "Active",
        job: job,
    }
  })

    const x = container.querySelectorAll('span.Label');
    expect(x.length).toBe(1);
    expect(x[0].textContent).toBe("Active");
})

test('it returns Succeeded/Done', () => {
    const job = {
        succeeded: true
    }
    const { getByText, container } = render(BoxRow, {
    props: {
        status: "Succeeded",
        job: job,
    }
  })

    const x = container.querySelectorAll('span.Label');
    expect(x.length).toBe(2);
    expect(x[0].textContent).toBe("Success");
    expect(x[1].textContent).toBe("Done");
})

test('it returns Succeeded/Done', () => {
    const job = {
        succeeded: false
    }
    const { getByText, container } = render(BoxRow, {
    props: {
        status: "Failing",
        job: job,
    }
  })

    const x = container.querySelectorAll('span.Label');
    expect(x.length).toBe(1);
    expect(x[0].textContent).toBe("Failing");
})
