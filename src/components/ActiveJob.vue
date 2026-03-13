<template>
  <tr>
    <th scope="row" style="text-align: center;">{{ index }}</th>
    <td>{{ activeJob.name }}</td>
    <td>{{ activeJob.namespace }}</td>
    <td>{{ activeJob.uuid }}</td>
    <td>{{ activeJob.generation }}</td>
    <td>{{ lux1(activeJob.creationTimestamp) }}</td>
    <td>{{ activeJob.status.active }}</td>
    <td>{{ activeJob.status.failed }}</td>
    <td>{{ lux1(activeJob.status.startTime) }}</td>
    <td>{{ lux1(activeJob.status.completionTime) }}</td>
    <td>{{ activeJob.duration }}</td>
    <td>{{ activeJob.durationInS }}</td>
    <td>{{ activeJob.status }}</td>
  </tr>
</template>

<script>
import { DateTime } from 'luxon';

export default {
  name: 'ActiveJob',
  props: [
    'index',
    'activeJob',
  ],
  methods: {
    lux1(t) {
      return DateTime.fromISO(t).toRelative();
    },
  },
};
</script>
